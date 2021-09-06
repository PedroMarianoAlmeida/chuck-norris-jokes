import Slider from "@material-ui/core/Slider";

const AllTabs = () => {
  return (
    <>
      <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={30}
      />
    </>
  );
};

export default AllTabs;
