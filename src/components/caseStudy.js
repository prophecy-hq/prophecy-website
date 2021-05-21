
/** @jsx jsx */
import { jsx, Styled, Box} from 'theme-ui';

export default function CaseStudy(props) {


    // =========== CASE STUDY ANIMATION ===============


        return(
        <Box sx = {{marginTop: 48}}>
            <Styled.h1>{props.title}</Styled.h1>
            <Styled.p>{props.description}</Styled.p>
           
        </Box>



        )
}



