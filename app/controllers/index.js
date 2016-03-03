var member = Alloy.Collections.member;

function doOpen(e) {
  member.fetch();
}

function doClose(e) {
  $.destroy();
}

function clickItem(e) {
  var itemId = e.itemId;

  if (OS_ANDROID) {
    itemId = parseInt(itemId);
  }

  var m = member.where({id: itemId});
  if (m.length) {
    alert(m[0].get('name') + ' on ' + m[0].get('instrument'));
  }
}

$.index.open();
