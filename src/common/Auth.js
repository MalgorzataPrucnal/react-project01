// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

// import { UserContext } from "../services/user/UserContext";
// import { PageWrapper } from "./PageWrapper";

// export const Auth = ({ children }) => {
//     const { user } = useContext(UserContext);

//     return user
//         ? children
//         : <PageWrapper title="You are not logged in">
//             <p>Please <Link to="/sign-in">sign in</Link> to see content.</p>
//         </PageWrapper>
// }