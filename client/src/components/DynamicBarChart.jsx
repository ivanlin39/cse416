import { BarChart } from '@mui/x-charts';

const DynamicBarChart = () => {
    //radio buttons to filter sorting
    return (
        <BarChart
            title="2022 New Maryland Voter Turnout"
            colors={["#d8031c", "#01016f"]}
            xAxis={[{ scaleType: 'band', data: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6', 'District 7', 'District 8'] }]}
            series={[{ label: "2022 Maryland Republican Voter Turnout", data: [159673, 109081, 115801, 15441, 94000, 115771, 32737, 47965] }, { label: "2022 Maryland Democrat Voter Turnout", data: [126511, 159000, 175514, 144204, 182478, 140295, 151640, 211842] }]}
            width={500}
            height={300}
            margin={{ left: 60 }}
        />
    )
}

export default DynamicBarChart;