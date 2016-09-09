# user-security.
Protects the `Meteor.users` collection from client-side writes. Meteor's user collection was designed poorly with respect to it's `profile` implementation. This simply covers that security hole.

### Installation

`meteor add streemo:user-security`

```
//in top level lib of server
import "streemo:user-security";
```