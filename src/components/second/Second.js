import React, { useState, useEffect } from 'react'
import SecondHearder from './SecondHearder';
import axios from 'axios';
import { HOST } from '../../constants';
import Head from '../table/Head';
import { useSelector } from 'react-redux';
import Tr from '../table/Tr';
import { v4 } from 'uuid';

function Second() {

  const url = useSelector(state => state.url)

  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`${HOST}${url}`)
        // console.log({ data })
        setData(data)
      } catch (error) {
        setData([])
        console.log(error)
      }
    })()
  }, [url]);


  return (
    <>
      <div className="second">
        <SecondHearder />
        <div className="second-body">
          {data?.headers?.length > 0 && (<table className="table table-bordered table-sm">
            <caption className="bg-white">
              <div className="caption-wrapper pr-3 bg-white d-flex w-100 justify-content-between align-items-center">
                <div className="view-left text-capitalize">
                  view 1-10 of 4074 rows
                </div>
                <div className="view-right d-flex align-items-center text-capitalize">

                  <select className=" p-0 bg-white border-0 form-control" name="rows" id="">
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
            {data?.headers?.length > 0 && <Head headers={data?.headers} />}
            <tbody className="bg-white">
              {data?.rows?.length > 0 && data.rows.map(r => (<Tr key={v4()} tds={r} />))}
            </tbody>
          </table>)}
        </div>
      </div>
    </>
  );
}

export default Second