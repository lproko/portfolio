import * as React from "react";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { Grid, Typography } from "@mui/material";
import Globe from "../../assets/language-white.svg";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

const Languages = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const ctx = useContext(LanguageContext);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (code?: string) => {
    if (code) {
      ctx.updateLocale(code);
    }
    setAnchorEl(null);
  };
  return (
    <Grid width="100%" display="flex" justifyContent="flex-end">
      <Tooltip title={t("AppBar.Translations")}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Grid display="flex" gap="0.375rem">
            <img
              src={Globe}
              style={{
                borderRight: "1px solid #0066CC",
                padding: "0.375rem",
              }}
              alt=""
            />
            <Typography color="#A0AEC0">
              {t("AppBar.CurrentTranslation")}
            </Typography>
          </Grid>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={() => handleClose()}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => handleClose("el-GR")}>
          <Typography fontWeight="500">{t("Languages.Greek")}</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClose("en-US")}>
          <Typography fontWeight="500">{t("Languages.English")}</Typography>
        </MenuItem>
      </Menu>
    </Grid>
  );
};

export default Languages;
