import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';

import {
  PageInfoWrap,
  Wrapper,
  LocationName,
  MotivationPhrase,
  MotivationStart,
  MotivationEnd,
  GooseMotivator,
} from './PageInfo.styled';

export default function PageInfo() {
  const tasks = useSelector(selectTasks);
  const { pathname } = useLocation();
  let location = ``;
  if (pathname.includes(`account`)) {
    location = `Account`;
  } else if (pathname.includes(`calendar`)) {
    location = `Calendar`;
  } else if (pathname.includes(`statistics`)) {
    location = `Statistics`;
  }

  return (
    <PageInfoWrap>
      {location === 'Calendar' && tasks && tasks.length > 0 && (
        <GooseMotivator />
      )}
      <Wrapper>
        <LocationName>{location}</LocationName>
        {location === 'Calendar' && tasks.length > 0 && (
          <MotivationPhrase>
            <MotivationStart>Let go{` `}</MotivationStart>
            <MotivationEnd>of the past and focus on the present</MotivationEnd>
          </MotivationPhrase>
        )}
      </Wrapper>
    </PageInfoWrap>
  );
}
