import React, { useState, useEffect } from 'react'
import SecondHeader from './SecondHeader';
import axios from 'axios';
import { HOST, rowsOptions } from '../../constants';
import Head from '../table/Head';
import { useDispatch, useSelector } from 'react-redux';
import Tr from '../table/Tr';
import { v4 } from 'uuid';
import SelectRows from '../table/SelectRows';
import Pagination from '../table/Pagination';
import setRows from '../../actions/setRows';

function Second() {

  const url = useSelector(state => state.url)
  const rows = useSelector(state => state.pagination)
  const dispatch = useDispatch()

  console.log('rows')
  // const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`${HOST}${url}`)
        dispatch(setRows(data?.rows))
        console.log({ data })
        // setData(data)
      } catch (error) {
        // dispatch(SelectRows([]))
        console.log(error)
      }
    })()
  }, [url, dispatch]);


  return (
    <>
      <div className="second">
        <SecondHeader />
        <div className="second-body">
          <table className="table table-bordered table-sm">
            <caption className="bg-white">
              <div className="caption-wrapper container-fluid pr-3 bg-white">
                <div className="row">
                  <div className="col-12 col-sm-6 view-col">
                    <div className="view-infos d-flex align-items-center text-capitalize">
                      <div className="views">view 1-10 of 4074 rows</div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="view-right d-flex align-items-center justify-content-end  text-capitalize">
                      <SelectRows
                        options={rowsOptions}
                        value="10 rows"
                        className="p-0 bg-white border-0"
                      />
                      <Pagination />
                    </div>
                  </div>
                </div>
              </div>
            </caption>
          </table>
          {/* {data?.headers?.length > 0 && (<table className="table table-bordered table-sm">
            {data?.headers?.length > 0 && <Head headers={data?.headers} />}
            <tbody className="bg-white">
              {rows?.length > 0 && rows.map(r => (<Tr key={v4()} tds={r} />))}
            </tbody>
          </table>)} */}
        </div>
      </div>
    </>
  );
}

export default Second