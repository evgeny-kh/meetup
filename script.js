const MEMBER_CHANGE_TIMEOUT = 25000;

(async () => {
  const response = await fetch('members.json');
  const members = await response.json();

  render(members, 0);
})();

function render(members, key) {
  const member = members[key % members.length];

  document.querySelector('.avatar').style.backgroundImage = `url(${member.avatar})`;
  document.querySelector('.name').innerHTML = member.fullName;
  document.querySelector('.position').innerHTML = member.jobPosition;
  document.querySelector('.location').innerHTML = member.location;
  document.querySelector('.qr').style.backgroundImage = `url(${member.qr})`;
  document.querySelector('.description').innerHTML = member.extra;

  setTimeout(() => render(members, key + 1), MEMBER_CHANGE_TIMEOUT);
}
