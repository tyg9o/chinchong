import { BoxProps, Box } from "@mui/material";

export default function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'white'),
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }