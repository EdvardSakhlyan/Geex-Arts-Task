import { ReactElement, useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  SxProps,
  Typography,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MovieIcon from "@mui/icons-material/Movie";
import AssessmentIcon from "@mui/icons-material/Assessment";

interface FilterItem {
  text: string;
  icon: ReactElement;
}

interface IFilterPanelProps {
  sx: SxProps;
}

const filterItems: FilterItem[] = [
  { text: "Все", icon: <GridViewIcon /> },
  { text: "Результаты соревнований", icon: <AssessmentIcon /> },
  { text: "Видео", icon: <MovieIcon /> },
  { text: "Достижения", icon: <EmojiEventsIcon /> },
];

const FilterPanel: React.FC<IFilterPanelProps> = ({ sx }) => {
  const [selectedFilter, setSelectedFilter] = useState("Все");

  return (
    <Paper sx={{ borderRadius: 4, padding: 2, ...sx }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Фильтр ленты
      </Typography>
      <List>
        {filterItems.map((item) => (
          <ListItem
            button
            key={item.text}
            selected={item.text === selectedFilter}
            onClick={() => setSelectedFilter(item.text)}
            sx={{ borderRadius: 1, marginBottom: 1 }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default FilterPanel;
