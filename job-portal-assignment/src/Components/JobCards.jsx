import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import BoltIcon from "@mui/icons-material/Bolt";

const JobCardContainer = styled(Card)`
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  position: relative;
  font-family: "Lexend", sans-serif;
`;

const JobCardContent = styled(CardContent)`
  padding: 20px;
`;

const JobTitle = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const JobDescription = styled(Typography)`
  font-size: 14px;
  color: #666;
`;

const StyledButton = styled(Button)`
&:hover {
  background-color: #55efc4;
});
color: black;
`;

const JobDescriptionContainer = styled(Box)`
  height: 250px;
  overflow: hidden;
  mask-image: linear-gradient(
    rgb(255, 255, 255),
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0)
  );
`;

const JobCards = ({
  jobName,
  description,
  logo,
  role,
  location,
  maxSalary,
  minExp,
  maxExp,
}) => {
  return (
    <JobCardContainer>
      <JobCardContent>
        <Box sx={{ display: "flex", alignItems: "left" }}>
          <Chip
            label="Posted 30Days ago"
            variant="outlined"
            avatar={<HourglassEmptyRoundedIcon />}
          />
        </Box>
        <Box sx={{ display: "flex", margin: "10px" }}>
          <Box
            sx={{
              display: "flex",
              marginRight: "10px",
              width: "25%",
              height: "25%",
            }}
          >
            <img
              alt="Remy Sharp"
              src={logo}
              style={{ width: "100%", height: "100%", objectFit: "content" }}
            />
          </Box>
          <Box sx={{ textAlign: "left", flex: 1 }}>
            <Typography color="#8B8B84" fontSize="13px" fontWeight="600">
              {jobName.toUpperCase()}
            </Typography>
            <Typography fontSize="14px">{role.toUpperCase()}</Typography>
            <Typography fontSize="11px">{location.toUpperCase()}</Typography>
          </Box>
        </Box>
        <JobTitle>{`Estimated Salary:$${maxSalary}K`} </JobTitle>
        <JobDescriptionContainer>
          <JobDescription>{description}</JobDescription>
        </JobDescriptionContainer>
        <Box mb="15px">
          <Button>View Job</Button>
        </Box>
        <Box textAlign="left">
          <Typography color="#8B8B84" fontWeight="600">
            Minimum Experience
          </Typography>
          <Typography>{`${minExp ?? maxExp ? maxExp : 0} Years`}</Typography>
        </Box>
        <Box>
          <StyledButton
            fullWidth
            variant="contained"
            sx={{ marginTop: "20px", backgroundColor: "#55efc4" }}
            startIcon={<BoltIcon />}
          >
            Easy Apply
          </StyledButton>
        </Box>
      </JobCardContent>
    </JobCardContainer>
  );
};

export default JobCards;
