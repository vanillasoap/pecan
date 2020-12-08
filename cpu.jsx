const command = "bash pecan/scripts/cpu";
const refreshFrequency = 500; // ms

const render = ({ output }) => <div class='screen'><div class='pecancpu'> {`${output}`}</div></div>;

export { command, refreshFrequency, render };
