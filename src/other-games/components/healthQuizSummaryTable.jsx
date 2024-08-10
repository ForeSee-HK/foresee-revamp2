import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  tableCellClasses,
  tableRowClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Fade } from "@mui/material";
import GameButton from "./gameButton";
import "../screens/healthQuiz.css";

const StyledTableCell = styled(TableCell)(({ theme, isCorrect }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d0d0d0",
    color: theme.palette.common.black,
    fontSize: 14,
    padding: "20px",
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: isCorrect ? "#5DBE7Ecc" : "#DE5D55cc",
    "&:last-child": {
      fontWeight: 700,
    },
    "&:nth-child(2)": {
      padding: "20px",
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme, isCorrect }) => ({
  [`&.${tableRowClasses.body}`]: {
    backgroundColor: isCorrect ? "#74b72e" : "#d2122e",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const HealthQuizSummaryTable = ({ shuffledContent }) => {
  const [healthyHabitRows, setHealthyHabitRows] = useState(null);
  const [unhealthyHabitRows, setUnhealthyHabitRows] = useState(null);
  const [fadedIn, setFadedIn] = useState(false);

  useEffect(() => {
    const shuffleHealthyContent = shuffledContent.filter(
      (item) => item.isHealthy
    );
    const shuffleUnhealthyContent = shuffledContent.filter(
      (item) => !item.isHealthy
    );
    setHealthyHabitRows(
      shuffleHealthyContent.map((item, index) => {
        return {
          healthyHabit: item.habit,
          healthyHabitReason: item.desc,
          result: item.isCorrect ? "Correct" : "Wrong",
        };
      })
    );
    setUnhealthyHabitRows(
      shuffleUnhealthyContent.map((item, index) => {
        return {
          unhealthyHabit: item.habit,
          unhealthyHabitReason: item.desc,
          result: item.isCorrect ? "Correct" : "Wrong",
        };
      })
    );
    setFadedIn(true);
  }, []);

  if (healthyHabitRows && unhealthyHabitRows) {
    return (
      <div style={{ height: "100%" }}>
        <Fade in={fadedIn} timeout={1000}>
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              marginTop: "10px",
            }}
          >
            Summary
          </p>
        </Fade>
        <Fade in={fadedIn} timeout={1000}>
          <div
            style={{ padding: "50px 30px", overflow: "auto", height: "65%" }}
          >
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 250 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Healthy Habit
                    </StyledTableCell>
                    <StyledTableCell align="center">Reason</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {healthyHabitRows.map((item) => (
                    <StyledTableRow
                      key={item.healthyHabit}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      isCorrect={item.result === "Correct"}
                    >
                      <StyledTableCell
                        component="th"
                        scope="row"
                        isCorrect={item.result === "Correct"}
                      >
                        {item.healthyHabit}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        isCorrect={item.result === "Correct"}
                      >
                        {item.healthyHabitReason}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div style={{ height: "50px" }}></div>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 250 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Unhealthy Habit
                    </StyledTableCell>
                    <StyledTableCell align="center">Reason</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {unhealthyHabitRows.map((item) => (
                    <StyledTableRow
                      key={item.unhealthyHabit}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      isCorrect={item.result === "Correct"}
                    >
                      <StyledTableCell
                        component="th"
                        scope="row"
                        isCorrect={item.result === "Correct"}
                      >
                        {item.unhealthyHabit}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        isCorrect={item.result === "Correct"}
                      >
                        {item.unhealthyHabitReason}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Fade>
        <div className="flex-container" style={{ marginTop: "30px" }}>
          <GameButton
            onClick={() => {
              window.location.reload();
            }}
          >
            Play again!
          </GameButton>
        </div>
      </div>
    );
  }

  return <></>;
};

export default HealthQuizSummaryTable;
