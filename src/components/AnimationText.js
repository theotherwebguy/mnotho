import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Mnotho Ndhlela",
          "a photographer",
          "a Videographer",
          "a Graphic Designer",
          "a Drone Pilot",
        
        ]}
      />
    </h1>
  );
};
export default AnimationText;
