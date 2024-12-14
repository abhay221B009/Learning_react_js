import React from "react";

export const List = () => {
  const users = [
    {
      username: "john_doe",
      email: "john.doe@example.com",
      location: "New York, USA",
    },
    {
      username: "jane_smith",
      email: "jane.smith@example.com",
      location: "London, UK",
    },
    {
      username: "alex_89",
      email: "alex.89@example.com",
      location: "Sydney, Australia",
    },
    {
      username: "emily_clark",
      email: "emily.clark@example.com",
      location: "Toronto, Canada",
    },
    {
      username: "michael_lee",
      email: "michael.lee@example.com",
      location: "San Francisco, USA",
    },
  ];

  //   return (
  //     <main>
  //       <ul>
  //         {users.map((user) => (
  //           <li key={user.username}>
  //             <strong>Username:</strong> {user.username} <br />
  //             <strong>Email:</strong> {user.email} <br />
  //             <strong>Location:</strong> {user.location}
  //           </li>
  //         ))}
  //       </ul>
  //     </main>
  //   );
  // };

  // export default List;
  //in the above method destructuring needs to be done for each user but for the below method it is not required
  //this same thing can also be done in different manner given below
  return (
    <main>
      <ul>
        {users.map(({ username, email, location }) => (
          <li key={username}>
            <strong>Username:</strong> {username} <br />
            <strong>Email:</strong> {email} <br />
            <strong>Location:</strong> {location}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default List;
