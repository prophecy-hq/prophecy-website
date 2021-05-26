
/** @jsx jsx */
import { jsx, Styled, Box} from 'theme-ui';

export default function CaseStudy(props) {


        return(
        <Box sx = {{marginBottom: 48}}>
            <Styled.h1>{props.title}</Styled.h1>
            <Styled.p>{props.description}</Styled.p>
           
        </Box>



        )
}



