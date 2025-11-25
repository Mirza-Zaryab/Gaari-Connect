import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import withReducer from "app/store/withReducer";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarHeader from "./CalendarHeader";
import EventDialog from "./EventDialog";
import reducer from "./store";
import {
  selectEvents,
  openNewEventDialog,
  openEditEventDialog,
  updateEvent,
  getEvents,
} from "./store/eventsSlice";

const Root = styled("div")(({ theme }) => ({
  "& a": {
    color: `${theme.palette.text.primary}!important`,
    textDecoration: "none!important",
  },
  "&  .fc-media-screen": {
    minHeight: "100%",
  },
  "& .fc-scrollgrid, & .fc-theme-standard td, & .fc-theme-standard th": {
    borderColor: `${theme.palette.divider}!important`,
  },
  "&  .fc-scrollgrid-section > td": {
    border: 0,
  },
  "& .fc-daygrid-day": {
    "&:last-child": {
      borderRight: 0,
    },
  },
  "& .fc-col-header-cell": {
    borderWidth: "0 0 1px 0",
    padding: "16px 0",
    backgroundColor: "#F9FAFB",
    "& .fc-col-header-cell-cushion": {
      color: theme.palette.text.secondary,
      fontWeight: 500,
    },
  },
  "& .fc-view ": {
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    overflow: "hidden",
    border: `1px solid ${theme.palette.divider}`,
    "& > .fc-scrollgrid": {
      border: 0,
    },
  },
  "& .fc-daygrid-day-number": {
    color: theme.palette.text.secondary,
    fontWeight: 500,
    fontSize: 20,
  },
  "& .fc-event": {
    // backgroundColor: `${theme.palette.primary.dark}!important`,
    backgroundColor: "#FBECF5",
    // color: `${theme.palette.primary.contrastText}!important`,
    borderTop: "3px solid #D22A8F",
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
    height: "48px",
    padding: "0 6px",
  },
  "& .fc .fc-daygrid-day.fc-day-today": {
    backgroundColor: "#fff",
    backgroundColor: "var(--fc-today-bg-color, #fff)",
  },
  "& .fc-h-event .fc-event-main": {
    color: "#000",
    color: "var(--fc-event-text-color, #000)",
  },
}));

function CalendarApp(props) {
  const [currentDate, setCurrentDate] = useState();
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const calendarRef = useRef();

  const headerEl = useRef(null);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;

    dispatch(
      openNewEventDialog({
        start,
        end,
      })
    );
  };

  const handleEventDrop = (eventDropInfo) => {
    const { id, title, allDay, start, end, extendedProps } =
      eventDropInfo.event;
    dispatch(
      updateEvent({
        id,
        title,
        allDay,
        start,
        end,
        extendedProps,
      })
    );
  };
  const handleEventClick = (clickInfo) => {
    const { id, title, allDay, start, end, extendedProps } = clickInfo.event;
    dispatch(
      openEditEventDialog({
        id,
        title,
        allDay,
        start,
        end,
        extendedProps,
      })
    );
  };

  const handleDates = (rangeInfo) => {
    setCurrentDate(rangeInfo);
  };

  const handleEventAdd = (addInfo) => {};

  const handleEventChange = (changeInfo) => {};

  const handleEventRemove = (removeInfo) => {};

  return (
    <Root className="flex flex-col flex-auto relative bg-white">
      <CalendarHeader calendarRef={calendarRef} currentDate={currentDate} />

      <div className="flex flex-1 container">
        <motion.div
          className="w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={false}
            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            weekends
            datesSet={handleDates}
            select={handleDateSelect}
            events={events}
            eventContent={renderEventContent}
            eventClick={handleEventClick}
            eventAdd={handleEventAdd}
            eventChange={handleEventChange}
            eventRemove={handleEventRemove}
            eventDrop={handleEventDrop}
            initialDate={new Date()}
            ref={calendarRef}
          />
        </motion.div>
        <EventDialog />
      </div>
    </Root>
  );
}

function renderEventContent(eventInfo) {
  return (
    <div className="flex items-center">
      <Typography className="text-12 font-semibold">
        {eventInfo.timeText}
      </Typography>
      <Typography className="text-12 px-4 truncate">
        {eventInfo.event.title}
      </Typography>
    </div>
  );
}

export default withReducer("calendarApp", reducer)(CalendarApp);
