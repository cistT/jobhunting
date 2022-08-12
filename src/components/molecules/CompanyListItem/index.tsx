import React from "react";

import { css } from "@emotion/react";

import DateBox from "components/atoms/Box/DateBox";
import { Divider, ListItem, Typography } from "@mui/material";

export type CompanyListItemProps = {
  label: string;
  date: Date;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  className?: string;
};

const CompanyListItem = (props: CompanyListItemProps) => {
  const { label, date, onClick = () => undefined, className = "" } = props;
  return (
    <>
      <ListItem css={styles.container} onClick={onClick} className={className}>
        <Typography variant="h3" component="h3" css={styles.label}>
          {label}
        </Typography>
        <DateBox date={date} />
      </ListItem>

      <Divider />
    </>
  );
};

export default CompanyListItem;
const styles = {
  container: css`
    display: grid;
    grid-template-columns: 70% 30%;
    padding-bottom: 5px;
    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
  label: css`
    font-size: 26px;
  `,
};
