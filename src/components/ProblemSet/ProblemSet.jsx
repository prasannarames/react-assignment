import React from "react";
import { Link } from "react-router-dom";

function ProblemSet({ problems }) {
  return (
    <div>
      <div>
        <h1>All problems</h1>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Difficulty</th>
              <th>Acceptence</th>
            </tr>

            {problems.map((p, idx) => (
              <tr>
                <Link to={`problems/:${p.problemId}`}>
                  <td>{p.title}</td>
                </Link>

                <td className={`${p.difficulty}`}>{p.difficulty}</td>
                <td className={`${p.difficulty}`}>{p.acceptance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProblemSet;
