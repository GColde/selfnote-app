import { useState, useEffect } from "react";
import { getHighlitedDaysV2, getDayTasksV2 } from "../../api/calendar";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const useCalendarComp = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [exercises, setExercises] = useState();

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

    const reloadMonthValueV2 = {
      userId: userId,
      year: year,
      month: month,
    };

    const reloadDayValueV2 = {
      userId: userId,
      year: year,
      month: month,
      day: day,
    };

    const reloadDay = await getDayTasksV2(reloadDayValueV2);
    setExercises(reloadDay);

    const reloadMonth = await getHighlitedDaysV2(reloadMonthValueV2);
    setHighlightedDays(reloadMonth);

    console.log(reloadDay);

    // settinu value kad po deleteinimo reloado nenumestu atgal i siandienos data
    // setValue(e);
  };

  const onChange = async (e) => {
    const year = e.getFullYear();
    const month = e.toLocaleString("default", {
      month: "short",
    });
    const day = e.getDate();

    const sendValueV2 = {
      userId: userId,
      year: year,
      month: month,
      day: day,
    };

    const getDayTasks = await getDayTasksV2(sendValueV2);
    setExercises(getDayTasks);

    // settinu value kad po deleteinimo reloado nenumestu atgal i siandienos data
    setValue(e);
  };

  const onMonthChange = async (e) => {
    const year = e.getFullYear();
    const month = e.toLocaleString("default", {
      month: "short",
    });
    console.log(month);

    const sendValueV2 = {
      userId: userId,
      year: year,
      month: month,
    };
    const resultV2 = await getHighlitedDaysV2(sendValueV2);
    setHighlightedDays(resultV2);
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const year = value.getFullYear();
    //     const month = value.toLocaleString("default", {
    //       month: "short",
    //     });

    //     const sendValueV2 = {
    //       userId: userId,
    //       year: year,
    //       month: month,
    //     };

    //     const resultV2 = await getHighlitedDaysV2(sendValueV2);
    //     setHighlightedDays(resultV2);

    //     console.log(resultV2);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // fetchData();
    onReload(value);
  }, [userId, value]);

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
