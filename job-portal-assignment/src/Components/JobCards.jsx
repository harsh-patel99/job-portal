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

const JobCards = () => {
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
              src="https://give.do/static/img/logos/19WJ/9aad65c4-4ada-437d-a056-cd099c1e88ef.png"
              style={{ width: "100%", height: "100%", objectFit: "content" }}
            />
          </Box>
          <Box sx={{ textAlign: "left", flex: 1 }}>
            <Typography color="#8B8B84" fontSize="13px" fontWeight="600">
              Name
            </Typography>
            <Typography fontSize="14px">Role</Typography>
            <Typography fontSize="11px">Location</Typography>
          </Box>
        </Box>
        <JobTitle>Salary </JobTitle>
        <JobDescriptionContainer>
          <JobDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </JobDescription>
        </JobDescriptionContainer>
        <Box mb="15px">
          <Button>View Job</Button>
        </Box>
        <Box textAlign="left">
          <Typography color="#8B8B84" fontWeight="600">
            Minimum Experience
          </Typography>
          <Typography>Experience</Typography>
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
