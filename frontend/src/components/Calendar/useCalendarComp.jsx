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

  //used

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

    // settinu value kad po deleteinimo reloado nenumestu atgal i siandienos data
    // setValue(e);
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

    // settinu value kad po deleteinimo reloado nenumestu atgal i siandienos data
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
