// union

enum Roles {
  SUPER_ADMIN = 0,
  ADMIN = 1,
  MANAGER = 2,
  SELLER = 3,
}

let myRole: Roles = Roles.ADMIN;

function sendMessage(role: Roles) {
  switch (role) {
    case Roles.SUPER_ADMIN:
      console.log("Hello super admin!");
      break;
    case Roles.ADMIN:
      console.log("Hello admin!");
  }
}

sendMessage(Roles.ADMIN);
