import { useState, useEffect } from "react";
import { getHighlitedDays, getDayTasks } from "../../api/calendar";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const useCalendarComp = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [exercises, setExercises] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = useAuthUser();

  const onReload = async (e) => {
    const year = e.getFullYear();
    const month = e.toLocaleString("default", {
      month: "short",
    });
    const day = e.getDate();

    const reloadMonthValue = {
      userId: userId,
      year: year,
      month: month,
    };

    const reloadDayValue = {
      userId: userId,
      year: year,
      month: month,
      day: day,
    };

    const reloadMonth = await getHighlitedDays(reloadMonthValue);
    setHighlightedDays(reloadMonth);

    const reloadDay = await getDayTasks(reloadDayValue);
    setExercises(reloadDay);
  };

  const onChange = async (e) => {
    const year = e.getFullYear();
    const month = e.toLocaleString("default", {
      month: "short",
    });
    const day = e.getDate();

    const reloadDayValue = {
      userId: userId,
      year: year,
      month: month,
      day: day,
    };

    const reloadDay = await getDayTasks(reloadDayValue);
    setExercises(reloadDay);
    setValue(e);
  };

  const onMonthChange = async (e) => {
    const year = e.getFullYear();
    const month = e.toLocaleString("default", {
      month: "short",
    });

    const reloadMonthValue = {
      userId: userId,
      year: year,
      month: month,
    };
    const reloadMonth = await getHighlitedDays(reloadMonthValue);
    setHighlightedDays(reloadMonth);
  };

  useEffect(() => {
    onReload(value);
  }, []);

  return {
    onReload,
    onChange,
    onMonthChange,
    highlightedDays,
    exercises,
    value,
    open,
    handleOpen,
    handleClose,
    userId,
  };
};

export default useCalendarComp;
