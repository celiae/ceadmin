import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMsg, setOpen, setType } from "../app/alertSlice";
import { selectAll, setLogin, setUsername } from "../app/userSlice";
import SpecificTransition from "../components/anim/SpecificTransition";
import CenterBox from "../components/layout/CenterBox";

export default function Login() {
  const uppercaseReg = new RegExp("[A-Z]", "g");
  const numberReg = new RegExp("[0-9]", "g");
  const [form, setForm] = React.useState({
    username: "foo",
    password: "bar",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectAll);
  React.useEffect(() => {
    if (user.login) {
      navigate(`/${user.username}`);
    }
  });
  if (user.login) {
    return <></>;
  }
  return (
    <SpecificTransition>
      <CenterBox>
        <Grid width={300} container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h5">User Login</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={form.username}
              onChange={(e) => {
                setForm({ ...form, username: e.target.value });
              }}
              required
              fullWidth
              label="username"
              placeholder="12345678910"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              required
              fullWidth
              label="password"
              placeholder="*****"
              type={"password"}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item>
                <Box
                  sx={Object.assign(
                    {
                      width: 50,
                      height: 10,
                    },
                    form.password.length >= 8
                      ? {
                          backgroundColor: "success.main",
                        }
                      : {
                          backgroundColor: "primary.darker",
                        }
                  )}
                />
              </Grid>
              <Grid item>
                <Box
                  sx={Object.assign(
                    {
                      width: 50,
                      height: 10,
                    },
                    uppercaseReg.test(form.password)
                      ? {
                          backgroundColor: "success.main",
                        }
                      : {
                          backgroundColor: "primary.darker",
                        }
                  )}
                />
              </Grid>{" "}
              <Grid item>
                <Box
                  sx={Object.assign(
                    {
                      width: 50,
                      height: 10,
                    },
                    numberReg.test(form.password)
                      ? {
                          backgroundColor: "success.main",
                        }
                      : {
                          backgroundColor: "primary.darker",
                        }
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              onClick={() => {
                if (form.username && form.password) {
                  dispatch(setType("success"));
                  dispatch(setMsg("Login success 登录成功"));
                  dispatch(setOpen(true));
                  dispatch(setUsername(form.username));
                  dispatch(setLogin(true));
                  navigate(`/${form.username}`);
                } else {
                  dispatch(setType("error"));
                  dispatch(
                    setMsg(
                      "Please input username and password 请输入账号和密码"
                    )
                  );
                  dispatch(setOpen(true));
                }

                clearTimeout();
                setTimeout(() => {
                  dispatch(setOpen(false));
                }, 5000);
              }}
            >
              Login
            </Button>
            <Button
              onClick={() => {
                navigate("/signup");
              }}
              variant="outlined"
            >
              SignUp
            </Button>
          </Grid>
        </Grid>
      </CenterBox>
    </SpecificTransition>
  );
}
