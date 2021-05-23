/*
How to add permissions:
to permissionLocs constant add permission name at the end of the object with serial number

How to create new permission group:
to defaultPermissions constant write permission group name object. Where you add permission by name from permissionLocs and set its value to 1.


*/

const sess = require('../middleware/session');
const db = require('./db');

const permissionLocs = {
	mod_perm: 1, //modify group permissions
	mod_user_perm:2, //change user permissons group
	post_to_wall:3,
	pin_post: 4,
	delete_post: 5,
	remove_comment: 6,
	accept_members: 7,
	kick_members: 8,
	change_team_settings: 9,
	is_member: 10,
	create_event: 11,
	edit_event: 12,
	delete_event: 13,
	disband_team: 14,
}

const defaultPermissions = {
	leader:{
		post_to_wall: 1,
		delete_post: 1,
		accept_members: 1,
		change_team_settings: 1,
		is_member: 1,
		create_event: 1,
		edit_event: 1,
		delete_event: 1,
		disband_team:1,
	},
	[`co-leader`]:{
		post_to_wall: 1,
		accept_members: 1,
		delete_post: 1,
		is_member: 1,
		create_event: 1,
		edit_event: 1,
		delete_event: 1
	},
	veteran:{
		post_to_wall: 1,
		is_member: 1
	},
	member:{
		post_to_wall: 1,
		is_member: 1
	},
	fresh:{
		post_to_wall: 1,
		is_member: 1
	},
	visitor:{
		post_to_wall: 0,
		is_member: 0,
	}

}

function defaultPerm(name){
	var code = '';
	var maxLength = Object.keys(permissionLocs).length;
	for(i=0; i<maxLength; i++ ){
		if(name == 'leader'){
			code += 1;
		}else{
			var permName = Object.keys(permissionLocs)[i];
			if( typeof defaultPermissions[name][permName] != 'undefined'){
				code += defaultPermissions[name][permName];
			}else{
				code += 0;
			}
		}
	}
	return code;
}

async function getPermission(name, data){
	if( data.perm_name == 'leader' ){
		return true;
	}
	if( data.creator == sess.get('userId') ){
		return true;
	}
	if(name == 'is_member' && data.perm_name != 'visitor'){
		return true;
	}
	if( sess.get('userId') ){
		var myPermissions = data.permissions
		if(myPermissions == null){
			if(data.member_status == 'approved'){
				myPermissions = await defaultPerm('member')
			}else{
				return false;
			}
		}
		var location = permissionLocs[name]-1;
		if( myPermissions.charAt(location) == 1){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

/*
async function getFeed(req, res, data){
	var content = '';
	var orderBy = `ORDER BY feed.pinned DESC, feed.created DESC`;
	var postStatus = `feed.status = "public" AND`;
	var limit = ``;
	if( sess.get('userId')){
		if( getPermission('is_member', data) ){
			var postStatus = `( feed.status = "public" OR feed.status = "members" ) AND`;
		}
	}
	var sql = `
	SELECT
		feed.id AS feedId,
		feed.type AS feedType,
		feed.raw_text as content,
		feed.posted_to as postedTo,
		feed.status,
		feed.pinned,
		feed.created as createdDateTime,
		feed.user_id,
		( CASE WHEN feed.user_id = ${ sess.get('userId') } THEN 'true' ELSE 'false' END ) as isOwner,
		teams.url as teamUrl,
		teams.name as teamName,
		feed.rich_media as richMedia,
		users.alias as userAlias,
		users.id as userId,
		users.dp as userDp,
		feed_img.full_path as feed_img_path,
		feed_img.image as feed_img
	FROM feed
		LEFT JOIN users ON feed.user_id=users.id
		LEFT JOIN images ON users.dp=images.image 
		LEFT JOIN teams ON feed.posted_to_id=teams.id
		LEFT JOIN images AS feed_img ON feed.id=feed_img.item_id 
	WHERE
		${ postStatus }
		feed.posted_to="team" AND
		feed.posted_to_id = "${data.id}"
		${ orderBy }
		${ limit }
	`;
	try {
		var result = await db.query(sql)
		return result;
	} catch(err) {
		throw new Error(err)
	}
	
}
*/
/*
async function getMembers(req, res, data){
	var content ='';
	var sql = `
    SELECT
		users.alias,
		users.dp,
		users.id as user_id
    FROM team_members
    LEFT JOIN users ON team_members.user_id=users.id
	WHERE team_members.team_id='${data.id}' 
	ORDER BY alias ASC`;
	try{
		var result = await db.query(sql);
	} catch(err){
		logger.log({level:'warn', sql:sql, label: `SQL in ${__filename} (${__line})`,message: err});
	}
	var isMember = await getPermission('is_member', data);
	var canAcceptMembers = await getPermission('accept_members', data);
	var newRequests = await requestCount(data.id)
	if( result.length > 0 ){
		for( var i = 0; i < result.length; i++ ){
			if(isMember){
				var onlineData = await user.isOnline(req, {userAlias: result[i].alias});
				if(onlineData){
					var onlineStatus = `<span class="status is-${onlineData.status}"></span>`
				}else{
					var onlineStatus = '<span class="status is-offline"></span>'
				}
			}else{
				var onlineStatus = '';
			}
			content += `<a href="/${result[i].alias}"><div class="dp user-${result[i].alias}" style="background-image:url(${ await user.profileImage(result[i].user_id, result[i].dp)})">${onlineStatus}</div></a>`
		}
	}

	return new Promise( (resolve) =>{
		res.render('partials/members', {
			layout: false,
			url: data.url,
			content: content,
			canAcceptMembers: canAcceptMembers,
			newRequests: newRequests,
			allowedToAll: true,
			isMember: isMember
		}, function(err, html){
			resolve(html);
		})
	})
}

async function requestCount(teamId){
		var sql = 'SELECT COUNT(*) as count FROM team_members WHERE team_id = "'+teamId+'" AND status="waiting"';
		try{
			var result = await db.query(sql)
		} catch(err){
			logger.log({level:'warn', sql:sql, label: `SQL in ${__filename} (${__line})`,message: err});
		}
		if( result.length > 0 ){
			return result[0].count;
		}else{
			return false;
		}
}
*/
async function permCheckList(code){
	permissionLocs;
		
	var list = {};
	for(i=0; i<code.length; i++){
		var value = code.charAt(i)
		var permName = Object.keys(permissionLocs)[i];
		if(value == 0){
			list[permName] = ''
		}else{
			list[permName] = 'checked'
		}
	}
	return list;
}

async function getTeamsByPermission(permission){
	var list = {};
	var location = permissionLocs[permission];
	var sql = `
	SELECT 
		teams.id,
		teams.name,
		teams.dp,
		teams.url,
		team_members.rights_group,
		team_permissions.value
	FROM team_members
	LEFT JOIN teams ON teams.id = team_members.team_id
	LEFT JOIN team_permissions ON team_members.rights_group = team_permissions.id
	WHERE 
		teams.url IS NOT null AND
		team_members.status="approved" AND 
		team_members.user_id="${sess.get('userId')}" AND
		SUBSTR(team_permissions.value,${location} ,1) = "1"
	`;
	try{
		var result = await db.query(sql);
		if(result.length > 0){
			for(i=0; result.length > i; i++){
				list[i] = {
					name: result[i].name,
					dp: result[i].dp,
					url: result[i].url,
					id: result[i].id
				}
			}
		}
	} catch(err){
		console.log(err)
	}
	return list;
}


module.exports.getTeamsByPermission = getTeamsByPermission;
module.exports.permissionLocs = permissionLocs;
module.exports.defaultPermissions = defaultPermissions;
module.exports.permCheckList = permCheckList;
module.exports.getPermission = getPermission;
module.exports.defaultPerm = defaultPerm;