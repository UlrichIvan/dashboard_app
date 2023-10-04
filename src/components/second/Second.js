import React, { useEffect } from 'react'
import SecondHeader from './SecondHeader';
import axios from 'axios';
import { HOST } from '../../constants';
import Head from '../table/Head';
import { useDispatch, useSelector } from 'react-redux';
import CaptionTable from '../table/CaptionTable';
import Tbody from '../table/Tbody';
import { setHeaders, setPages, setRows, setRowsPeerPages } from '../../actions/paginationActions';

function Second() {

  const url = useSelector(state => state.url)

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`${HOST}${url}`)
        dispatch(setRowsPeerPages({ rowsPage: data?.rows?.slice(0, 10) || [] }))
        dispatch(setRows(data?.rows || []))
        dispatch(setHeaders(data?.headers || []))
        dispatch(setPages({ period: 10 }))
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
        <SecondHeader />
        <div className="second-body">
          <div class="panel-body bg-white table-responsive">
            <table className="table table-bordered table-sm">
              <Head />
              <Tbody />
            </table>
          </div>
          <CaptionTable />
        </div>
      </div>
    </>
  );
}

export default Second