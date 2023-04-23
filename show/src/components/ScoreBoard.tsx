import React from "react";
const ScoreBoard: React.FC = () => {
    return (
        <table className="ScoreBoardTable">
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Score</td>
                                        <td>Name</td>
                                        <td>Score</td>
                                        <td>Name</td>
                                        <td>Score</td>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(10)].map((x,i) =>
                                        <tr>
                                        <td>John</td>
                                        <td>100</td>
                                        <td>John</td>
                                        <td>100</td>
                                        <td>John</td>
                                        <td>100</td>
                                    </tr>
                                    ) }
                                    
                                    
                                </tbody>
            </table>
    );
}

export default ScoreBoard;