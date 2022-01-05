import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {makeStyles} from '@material-ui/core'
import {addToFavorite} from "../redux/planetsDucks";
import { useDispatch,} from "react-redux";

const useStyles = makeStyles(() => ({
  root:{
    '&.MuiButtonBase-root': {
      color: 'yellow',
    '&.Mui-checked':{
        color: 'yellow'
      }
      
    },
  }
}));
export default function IconCheckboxes({item}) {

  const dispatch = useDispatch()
  const styles = useStyles()
  return (
    <div>
      <Checkbox id='input' onClick={()=>dispatch(addToFavorite(item))}  className={styles.root} icon={<FavoriteBorder/>} checkedIcon={<Favorite />} />
      
    </div>
  );
}
