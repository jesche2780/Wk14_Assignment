export default function DateView() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <h2>{`${monthNames[currentMonth]} ${currentYear}`}</h2>
    </div>
  );
}
