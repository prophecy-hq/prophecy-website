
/** @jsx jsx */
import { jsx, Styled, Box} from 'theme-ui';
import { Link } from 'gatsby';

export default function CaseStudy(props) {


        return(
        <Box sx = {{marginBottom: 48}}>
            <Link sx = {{variant: 'layouts.link'}}><Styled.h1 >{props.title}</Styled.h1>
            <p sx = {{variant: 'text.p'}}>{props.description}</p></Link>
           
        </Box>



        )
}



