// data loading hook
const { useState, useEffect } = require("react")

const useRobotData = () => {
    // state declare for robotdata
    const [robotData, setrobotData] = useState([]);
    // loading data from server
    useEffect(() => {
        fetch('http://localhost:8000/api/robots').then(res => res.json()).then(data => setrobotData(data.data))
    }, [])
    return [robotData, setrobotData]

}
export default useRobotData;