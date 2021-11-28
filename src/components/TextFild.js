import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export const TextField = ({value = '',handleChange, id,hintText,filedName}) => {
    return (
        <FormControl variant="standard">
            <InputLabel htmlFor={id}>{filedName}</InputLabel>
            <Input
                id={id}
                value={value}
                onChange={handleChange}
                aria-describedby={`${id}-text`}
            />
            {hintText && 
            ( <FormHelperText id={`${id}-text`}>
                {hintText}
            </FormHelperText>)
            }
        </FormControl>
    )
}