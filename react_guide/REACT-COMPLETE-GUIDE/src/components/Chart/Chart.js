import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const dataPointVals = props.points.map(point => point.value);
  const totalMax = Math.max(...dataPointVals);
  return <div className="chart">
    {props.points.map(point => (
      <ChartBar
        id={point.id}
        key={point.label}
        value={point.value}
        maxValue={totalMax}
        label={point.label}
      />
    ))}
  </div>
}

export default Chart;