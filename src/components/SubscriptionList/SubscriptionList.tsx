import React from "react";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  IconButton,
  SxProps,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlagIcon from "@mui/icons-material/Flag";

interface Subscription {
  name: string;
  role: string;
  country: string;
  avatar: string;
  verified: boolean;
}

const subscriptions: Subscription[] = [
  {
    name: "Александр Магомедов",
    role: "Спортсмен • Призер Олимпийских игр",
    country: "Россия",
    avatar: "path_to_avatar1.jpg",
    verified: true,
  },
  {
    name: "Дмитрий Зайцев",
    role: "Судья • Заслуженный судья и секретарь",
    country: "Россия",
    avatar: "path_to_avatar2.jpg",
    verified: true,
  },
  {
    name: "Светлана Бессонова",
    role: "Спортсмен • Призер Олимпийских игр",
    country: "Россия",
    avatar: "path_to_avatar3.jpg",
    verified: false,
  },
  {
    name: "Андрей Романов",
    role: "Спортсмен • Мастер спорта СССР",
    country: "Россия",
    avatar: "path_to_avatar4.jpg",
    verified: false,
  },
  {
    name: "Анастасия Землякова",
    role: "Тренер • Тренер по гандболу",
    country: "Россия",
    avatar: "path_to_avatar5.jpg",
    verified: true,
  },
];

interface ISubscriptionListProps {
  sx: SxProps;
}

const SubscriptionList: React.FC<ISubscriptionListProps> = ({ sx }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        p: 2,
        backgroundColor: "#fff",
        ...sx,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Интересные подписки
      </Typography>
      <List>
        {subscriptions.map((subscription) => (
          <ListItem key={subscription.name} sx={{ alignItems: "flex-start" }}>
            <ListItemAvatar>
              <Avatar src={subscription.avatar} alt={subscription.name} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {subscription.name}
                  {subscription.verified && (
                    <CheckCircleIcon
                      color="primary"
                      sx={{ ml: 1, fontSize: 16 }}
                    />
                  )}
                </Box>
              }
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {subscription.role}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                    <FlagIcon sx={{ mr: 0.5, fontSize: 16 }} />
                    <Typography variant="body2" color="textSecondary">
                      {subscription.country}
                    </Typography>
                  </Box>
                </>
              }
            />
            <IconButton edge="end" aria-label="follow">
              <PersonAddIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
        Смотреть всех
      </Button>
    </Box>
  );
};

export default SubscriptionList;
