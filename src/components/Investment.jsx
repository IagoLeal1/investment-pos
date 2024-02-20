/* eslint-disable react/prop-types */

import { getMonthDescription, formatMoney, formatPercentage } from "../helpers/helpers";

export function Investment({ children: investment }) {
  return (
    <>
      <div className="border p-4 m-2">
        <h2 className="text-center font-semibold text-xl">
          {investment.description}
        </h2>

        <ul>
          {investment.reports.map((report) => {
            return <li key={report.id} 
            className='flex flex-row items-center justify-between'>
              <span className="font-mono">
                {getMonthDescription(report.month)}/{report.year}
              </span>
              <span className='flex-1 ml-4'>
                {formatMoney(report.value)}
              </span>
              <span>{formatPercentage(report.percentagevalue)}</span>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
}
