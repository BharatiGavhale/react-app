// // import LockIcon from '@mui/icons-material/Lock';
// // import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';


// // import React from 'react';


// // const Login=()=>{
// //     const paperStyle={padding :20, height:'80vh', width:280, margin:"20px auto"}
// //     const avaterStyle={backgroundColor:"#1bbd7e"};
// //     const btnstyle={marging:'8px 0'}
// //     return(
// //         <Grid>
// //             <Paper elevation={10} style={paperStyle}>
// //                 <Grid align='Center'>
// //                 <Avatar style={avaterStyle}><LockIcon/></Avatar>
// //                     <h2>Sign in</h2>
// //                 </Grid>
// //                 <TextField label='Username'placeholder='Enter username' fullWidth required></TextField>
// //                 <TextField label='Password'placeholder='Enter Password' type='password' fullWidth required></TextField>
// //                 <FormControlLabel
// //                 control={<Checkbox  name="checkedA" /> }
// //                 label="Remember me"
// //             />
// //                 <Button type ="submit" color="primary"  variant="contained" style={btnstyle} fullWidth>Sign in</Button>
// //                 <Typography>
// //                     <Link href="#" >
// //                     Forgot Password ?
// //                 </Link>
// //                 </Typography>
// //                 <Typography> Do you have an account ?
// //                     <Link href="#" >
// //                     Sign Up
// //                 </Link>
// //                 </Typography>
// //             </Paper>
// //         </Grid>
        
// //     );
    
// // }
// // export default Login;





// import React, { useState } from 'react';
// import { TextField, Button, Typography, Container, Grid, Box, Paper } from '@mui/material';

// function Login() {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             // Mock API call
//             const response = await fetch('/api/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const result = await response.json();
//             if (result.success) {
//                 // Handle successful login
//             } else {
//                 setError(result.message);
//             }
//         } catch (err) {
//             console.error('Error:', err);
//             setError('An error occurred during login.');
//         }
//     };

//     return (
//         <Container component="main" maxWidth="xs">
//             <Paper elevation={3} sx={{ p: 3 }}>
//                 <Typography component="h1" variant="h5" align="center">
//                     Login
//                 </Typography>
//                 <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 fullWidth
//                                 id="email"
//                                 label="Email Address"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </Grid>
//                     </Grid>
//                     {error && (
//                         <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
//                             {error}
//                         </Typography>
//                     )}
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                         sx={{ mt: 3, mb: 2 }}
//                     >
//                         Login
//                     </Button>
//                 </Box>
//             </Paper>
//         </Container>
//     );
// }

// export default Login;




// import React, { useState } from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailErr, setEmailErr] = useState(false);
//   const [passwordErr, setPasswordErr] = useState(false);
//   const loginHandler = (event) => {
//     if (email.length < 3 || password.length < 5) {
//       alert("Please enter correct email and password");
//     } else {
//       alert("Login Successfull");
//     }
//     event.preventDefault();
//     console.log("login successfull");
//   };
//   const emailHandler = (event) => {
//     let item = event.target.value;
//     if (item.length <= 3) {
//       setEmailErr(true);
//     } else {
//       setEmailErr(false);
//     }
//     setEmail(item);
//     console.log("email", event.target.value);
//   };
//   const passwordHandler = (event) => {
//     let item = event.target.value;
//     if (item.length <= 5) {
//       setPasswordErr(true);
//     } else {
//       setPasswordErr(false);
//     }
//     setPassword(item);
//     console.log("password", event.target.value);
//   };
//   return (
//     <div>
//       <form onSubmit={loginHandler}>
//         <input
//           type="text"
//           placeholder="Please Enter Your Email"
//           onChange={emailHandler}
//         ></input>
//         <br></br>
//         <br></br>
//         <input
//           type="password"
//           placeholder="Please Enter Your password here"
//           onChange={passwordHandler}
//         ></input>
//         <br></br>

//         <br></br>
//         <button type="submit">Submit </button>
//       </form>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
//   const navigate = useNavigate();
  const loginHandler = async (data) => {
    // localStorage.setItem("login", true);
    // navigate("/");
    // console.log("loginHandler", data);
    // reset({ email: "bharatigavhale@gmail.com", password: "Bharati@2002" })

    // Post data using fetch method
    // const result = fetch("http://localhost:5000/postData", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     Name: "XYZ",
    //     Address: "Pune",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((result) => console.log("result", result));
    // console.log(result);

    // Post data using axios
    const result = await axios.post("http://localhost:5000/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("result", result);
    if (result.data) {
      sessionStorage.setItem("user", result.data.user);
      sessionStorage.setItem("accessToken", result.data.accessToken);
      sessionStorage.setItem("refreshToken", result.data.refreshToken);
    } else {
      alert("please enter correct details");
    }
  };
  let sessionToken = sessionStorage.getItem("token");

  useEffect(() => {
    // Get data using fetch method
    // fetch("http://localhost:5000/")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // Get data using axios
    // const data = axios
    //   .get("http://localhost:5000/")
    //   .then((res) => console.log(res.data));
    // console.log("data", data);
    // console.log("data", data);

    console.log("sessionToken", sessionToken);
    getData();
  }, [sessionToken]);

  const getData = async () => {
    let result = await axios.get("http://localhost:5000/getData", {
      headers: {
        authorization: `bearer ${sessionToken}`,
      },
    });
    console.log("result", result.data);
  };
  const refreshToken = async () => {
    try {
      const response = await axios.post("http://localhost:5000/refresh", {
        refreshToken: sessionStorage.getItem("refreshToken"),
      });
      sessionStorage.setItem("token", response.data.accessToken);
    } catch (error) {
      console.error("Failed to fetch token", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshToken();
    }, 1 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <form onSubmit={handleSubmit(loginHandler)}>
        <input
          type="text"
          placeholder="Please Enter Your Email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Please enter correct pattern of email",
            },
          })}
        ></input>

        <br></br>
        {/* {errors.email && errors.email.type === "required" && (
          <p style={{ color: "red" }}>Email is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p style={{ color: "red" }}>Please enter correct pattern of email</p>
        )} */}
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <br></br>
        <input
          type="password"
          placeholder="Please Enter Your password here"
          name="password"
          {...register("password", {
            required: true,
            // minLength: {
            //   value: 6,
            //   message: "Please enter minimum six character",
            // },
            validate: {
              checkLength: (value) => value.length >= 6,
              matchPattern: (value) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                  value
                ),
            },
          })}
        ></input>
        {errors.password && errors.password.type === "required" && (
          <p style={{ color: "red" }}>Password is required</p>
        )}
        {errors.password && errors.password.type === "checkLength" && (
          <p>Please enter minimum six character</p>
        )}
        {errors.password && errors.password.type === "matchPattern" && (
          <p>Pattern is not match</p>
        )}
        {/* {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )} */}
        <br></br>
        <br></br>
        <button type="submit">Login </button>
      </form>
    </div>
  );
}

