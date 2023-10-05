import React, { useEffect } from 'react'
import SecondHeader from './SecondHeader';
import axios from 'axios';
import { DEFAULT_PERIOD, HOST } from '../../constants';
import Head from '../table/Head';
import { useDispatch, useSelector } from 'react-redux';
import CaptionTable from '../table/CaptionTable';
import Tbody from '../table/Tbody';
import { setHeaders, setPages, setRows, setRowsPeerPages } from '../../actions/paginationActions';

function Second() {

  const url = useSelector(state => state.url)

  const dispatch = useDispatch()

  const { rows, period } = useSelector(state => state.pagination)

  useEffect(() => {

    if (rows?.hasOwnProperty(period)) {

      let rowsValue = rows[period]

      dispatch(setPages(rowsValue?.pages || 1))
    }

  }, [rows, dispatch, period]);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`${HOST}${url}`)
        dispatch(setRowsPeerPages({ rowsPage: data?.rows?.slice(0, DEFAULT_PERIOD) || [] }))
        dispatch(setRows(data?.rows || []))
        dispatch(setHeaders(data?.headers || []))
      } catch (error) {
        dispatch(setRows([]))
        dispatch(setHeaders([]))
        console.log(error)
      }
    })()
  }, [url, dispatch]);


  return (
    <>
      <div className="second">
        <div className="second-body">
          <SecondHeader />
          {Object.keys(rows)?.length ? <div className="panel-body bg-white table-responsive">
            <table className="table table-bordered table-sm">
              <Head />
              <Tbody />
            </table>
          </div> : null}
          <CaptionTable />
        </div>
      </div>
    </>
  );
}

export default Second