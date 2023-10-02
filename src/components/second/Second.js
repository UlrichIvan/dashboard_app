import React from 'react'
import SecondHearder from './SecondHearder';

function Second() {
  // let params = useParams()
  // console.log(params)
  return (
    <>
      <div className="second">
        <SecondHearder />
        <div className="second-body">
          <table className="table table-bordered table-sm">
            <caption className="bg-white">
              <div className="caption-wrapper pr-3 bg-white d-flex w-100 justify-content-between align-items-center">
                <div className="view-left text-capitalize">
                  view 1-10 of 4074 rows
                </div>
                <div className="view-right d-flex align-items-center text-capitalize">
                  <select className="bg-white border-0" name="rows" id="">
                    <option value="1">10 rows</option>
                    <option value="1">15 rows</option>
                    <option value="1">20 rows</option>
                    <option value="1">30 rows</option>
                  </select>
                  <div className="page-indicator ml-3">
                    <span className="previous">
                      <i className="fa fa-chevron-left"></i>
                    </span>
                    <span className="previous">
                      <i className="fa fa-chevron-left"></i>
                    </span>
                    <span className="pages mx-3"> page 1 of 408 </span>
                    <span className="next">
                      <i className="fa fa-chevron-right"></i>
                    </span>
                    <span className="next">
                      <i className="fa fa-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </caption>
            <thead>
              <tr className="bg-white-smoke">
                <th>
                  <input type="checkbox" className="checkbox" name="" id="" />
                </th>
                <th>channel</th>
                <th>facebook</th>
                <th>instagram</th>
                <th>linkedin</th>
                <th>whatsapp</th>
                <th>chat</th>
                <th>call</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td>
                  <input type="checkbox" className="checkbox" name="" id="" />
                </td>
                <td>lorem</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" className="checkbox" name="" id="" />
                </td>
                <td>lorem</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="checkbox" name="" id="" />
                </td>
                <td>lorem</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="checkbox" name="" id="" />
                </td>
                <td>lorem</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="checkbox" name="" id="" />
                </td>
                <td>lorem</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="checkbox" name="" id="" />
                </td>
                <td>lorem</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="checkbox" name="" id="" />
                </td>
                <td>lorem</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Second