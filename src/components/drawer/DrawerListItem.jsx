"use client";

import {
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import IconifyIcon from "../../components/base/IconifyIcon";
import { useState } from "react";
import CollapsedItems from "./CollapsedItems";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { useLocation } from 'react-router-dom';

const DrawerListItem = ({ item }) => {
  // const location = useLocation();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleCollapsedItem = () => {
    setOpen(!open);
  };

  const { icon: Icon, title, path, collapsible, active } = item;

  return (
    <ListItem
      disablePadding
      sx={{
        flexDirection: "column",
        alignItems: "stretch",
        mb: 1.25,
        opacity: active ? 1 : 0.5,
        width: 174,
      }}
    >
      <ListItemButton
        // selected={location.pathname === path}
        onClick={
          title == "Log out"
            ? () => {
                signOut({ redirect: false }).then(() =>
                  router.replace("/login")
                );
              }
            : handleCollapsedItem
        }
        component={path ? Link : "div"}
        href={path}
      >
        <ListItemIcon sx={{ mr: 1 }}>
          <Icon fontSize="small" sx={{ color: "grey.600" }} />
        </ListItemIcon>
        <ListItemText primary={title} />
        {collapsible && (
          <IconifyIcon icon={open ? "ep:arrow-up" : "ep:arrow-down"} />
        )}
      </ListItemButton>

      {collapsible && <CollapsedItems subItems={item.subList} open={open} />}
    </ListItem>
  );
};

export default DrawerListItem;
