import { Box, Typography, Avatar, useTheme, styled } from "@mui/material";
import { memo } from "react";
import { HubOSHub } from "@api/hub.model";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { ipfsCIDToHttpUrl } from "@api/storage.api";

export const pulsate = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 107, 176, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 107, 176, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 107, 176, 0);
  }
`;

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  borderRadius: "16px",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: "rgba(255, 255, 255, 0.02)",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    transform: "translateY(-2px)"
  }
}));

interface HubCardProps {
  hubData: HubOSHub;
  isHighlighted?: boolean;
}

const HubCard = ({ hubData, isHighlighted }: HubCardProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${hubData.name}`);
  };

  const marketTitle = hubData.properties?.marketTemplate?.title || "Hub";

  return (
    <CardContainer
      onClick={handleCardClick}
      sx={{
        ...(isHighlighted && {
          borderColor: theme.palette.primary.main,
          boxShadow: `0 0 0 2px ${theme.palette.primary.main}`
        })
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Avatar
          src={ipfsCIDToHttpUrl(hubData.image as string)}
          alt={hubData.name}
          sx={{ width: 50, height: 50, borderRadius: "50%" }}
        >
          {hubData.name?.charAt(0)}
        </Avatar>
        <Box>
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            {hubData.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {marketTitle}
          </Typography>
        </Box>
      </Box>
      
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mb: 2,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
      >
        {hubData.description}
      </Typography>
    </CardContainer>
  );
};

export default memo(HubCard);

