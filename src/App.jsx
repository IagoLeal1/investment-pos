import { backend } from './api/api.js';
import { Header } from './components/Header.jsx';
import { Main } from './components/Main.jsx';
import { Investment } from './components/Investment.jsx';

function calculatePercentage(currentValue, previousValue) {
  return (currentValue / previousValue - 1) * 100;
}

export default function App() {
  const sanitizedBackend = backend.investments
    .toSorted((a, b) => {
      return a.description.localeCompare(b.description);
    })
    .map((investment) => {
      const filteredReports = backend.reports
        .filter((report) => {
          return report.investmentId === investment.id;
        })
        .toSorted((a, b) => a.month - b.month)
        .map((report) => {
          // const {id, month, year, value} = report
          // return{id, month, year, value}

          // eslint-disable-next-line no-unused-vars
          const { investmentId, ...fieldsToKeep } = report;
          return fieldsToKeep;
        })
        .map((report, index, currentReports) => {
          if (index === 0) {
            return { ...report, percentage: 0 };
          }

          const previousValue = currentReports[index - 1].value;

          return {
            ...report,
            percentage: calculatePercentage(report.value, previousValue),
          };
        });

      return {
        ...investment,
        totalPercentage: calculatePercentage(
          filteredReports.at(-1).value,
          filteredReports[0].value
        ),
        reports: filteredReports,
      };
    });

  return (
    <>
     <Header>
      <h1>React Investments</h1>
     </Header>

      <Main>
        <ul>
          {sanitizedBackend.map(item => {
            <li key={item.id}>
              <Investment>{item}</Investment>
            </li>;
          })}
        </ul>
      </Main>
    </>
  );
}
