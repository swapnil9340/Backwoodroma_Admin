import TextField from "@mui/material/TextField";
import useStyles from "../../../../Style";
import RolePermissionArray from "./RolePermissionArray";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const RoleDetails = ({ rolepermision, setrolepermision, descchceck }) => {
  const { register, errors ,getValues,setValue } = useFormContext();

  function getKeyByValue(obj, value) {
    return Object.entries(obj).reduce((acc, [key, val]) => {
      if (val === value) {
        acc.push(key);
      }
      return acc;
    }, []);
  }
  const classes = useStyles();
  function changehandle(e) {
    let key = e.target.name;
    let value = e.target.value;

    setrolepermision({ ...rolepermision, [key]: value });
  }
  useEffect(() => {
    let descrip = "";

    RolePermissionArray.forEach((item, index) => {
      RolePermissionArray[index].roles[0].View =
        rolepermision[`View${item.RoleName}`];
      RolePermissionArray[index].roles[0].Delete =
        rolepermision[`Delete${item.RoleName}`];
      RolePermissionArray[index].roles[0].Add =
        rolepermision[`Add${item.RoleName}`];
      RolePermissionArray[index].roles[0].Edit =
        rolepermision[`Edit${item.RoleName}`];
    });

    RolePermissionArray.forEach((item, index) => {
      let ans = getKeyByValue(item?.roles[0], true);

      if (Boolean(ans.length !== 0)) {
        if (ans.length === 4) {
          descrip += `${item.RoleName}(All) ,`;
        } else {
          descrip += `${item.RoleName}(${ans.join()}), `;
        }
      }
    });
    setrolepermision({ ...rolepermision, Description: descrip });
    setValue('Description', descrip, { shouldDirty: true })
  }, [descchceck]);

  return (
    <div className="col-12 RoleDetails_container">
      <div className="col-12 roleDetails_header">
        <h2 className="roleDetailsSechaedings">Role Details</h2>
        <p className="roleDetailsSechaedings">
          Role details are shown in email invites and on the dashboard.
        </p>
      </div>
      <div className="col-lg-6 col-12 RoleDetailInputField">
        <div className="col-12 roleDetailInputField_container">
          <div className="col-lg-3  col-3">
            <label className="roleLabelStyle" htmlFor="role">
              Role*
            </label>
          </div>
          <div className="col-lg-9  col-8">
            <TextField
              className={classes.textFeilddesign}
              inputRef={register({
                required: "This Field is required*.",
              })}
              onChange={(e) => changehandle(e)}
              value={rolepermision.RoleTitle}
              name={"RoleTitle"}
              id="role"
              placeholder="Role"
              variant="outlined"
              fullWidth
              size="small"
              helperText={errors?.RoleTitle?.message}
              error={Boolean(errors?.RoleTitle)}
            />

          </div>
        </div>
        <div className="col-12 roleDetailInputField_container">
          <div className=" col-lg-3  col-3">
            <label className="roleLabelStyle" htmlFor="description">
              Description*
            </label>
          </div>
          <div className="col-lg-9  col-8">
            <textarea
              id="description"
              rows="3"
              ref={register({required: 'Select Any Permissions ', maxLength: 2000})}
              className="Description"
              name="Description"
              value={rolepermision.Description}
              style={{border:`1px solid ${ Boolean(errors?.Description) ? "red" :"#eee" }`}}
              disabled
              
            ></textarea>
             { Boolean(errors?.Description) &&
            <span className="text-danger">{ errors?.Description?.message} </span> }
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoleDetails;
