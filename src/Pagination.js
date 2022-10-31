import React from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  return (
    <>
      <div>
        {props.curPage === 1 && (
          <div className={classes.pagination}>
            <span className={classes.curPageSpan}>{props.curPage} </span>
            {props.chunksLength > 1 && (
              <>
                <span
                  onClick={() => {
                    props.onSelectPage(2);
                  }}
                >
                  2
                </span>
                {props.chunksLength === 3 && (
                  <span
                    onClick={() => {
                      props.onSelectPage(3);
                    }}
                  >
                    3
                  </span>
                )}
                {props.chunksLength >= 4 && (
                  <>
                    <span className={classes.dots}>...</span>
                    <span
                      onClick={() => {
                        props.onSelectPage(props.chunksLength);
                      }}
                    >
                      {props.chunksLength}
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
      <div>
        {props.curPage === 2 && (
          <div className={classes.pagination}>
            <span
              onClick={() => {
                props.onSelectPage(1);
              }}
            >
              1
            </span>
            <span className={classes.curPageSpan}>{props.curPage}</span>
            {props.chunksLength > 2 && (
              <>
                <span
                  onClick={() => {
                    props.onSelectPage(3);
                  }}
                >
                  3
                </span>
                {props.chunksLength > 4 && <span>...</span>}
                {props.chunksLength >= 4 && (
                  <span
                    onClick={() => {
                      props.onSelectPage(props.chunksLength);
                    }}
                  >
                    {props.chunksLength}
                  </span>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div>
        {props.curPage === 3 && (
          <div className={classes.pagination}>
            <span
              onClick={() => {
                props.onSelectPage(1);
              }}
            >
              1
            </span>
            <span
              onClick={() => {
                props.onSelectPage(2);
              }}
            >
              2
            </span>
            <span className={classes.curPageSpan}>{props.curPage}</span>
            {props.chunksLength > 3 && (
              <>
                <span
                  onClick={() => {
                    props.onSelectPage(4);
                  }}
                >
                  4
                </span>
                {props.chunksLength > 5 && (
                  <>
                    <span>...</span>{" "}
                    <span
                      onClick={() => {
                        props.onSelectPage(props.chunksLength);
                      }}
                    >
                      {props.chunksLength}
                    </span>
                  </>
                )}
                {props.chunksLength === 5 && (
                  <span
                    onClick={() => {
                      props.onSelectPage(2);
                    }}
                  >
                    5
                  </span>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div>
        {props.curPage > 3 && props.curPage < props.chunksLength - 2 && (
          <div className={classes.pagination}>
            <span
              onClick={() => {
                props.onSelectPage(1);
              }}
            >
              1
            </span>
            <span>...</span>
            <span
              onClick={() => {
                props.onSelectPage(props.curPage - 1);
              }}
            >
              {props.curPage - 1}
            </span>
            <span className={classes.curPageSpan}>{props.curPage}</span>
            {props.chunksLength > props.curPage && (
              <span
                onClick={() => {
                  props.onSelectPage(props.curPage + 1);
                }}
              >
                {props.curPage + 1}
              </span>
            )}
            {props.chunksLength === props.curPage + 2 && (
              <span
                onClick={() => {
                  props.onSelectPage(props.curPage + 2);
                }}
              >
                {props.curPage + 2}
              </span>
            )}

            {props.chunksLength > props.curPage + 2 && (
              <>
                <span>...</span>
                <span
                  onClick={() => {
                    props.onSelectPage(props.chunksLength);
                  }}
                >
                  {props.chunksLength}
                </span>
              </>
            )}
          </div>
        )}
      </div>

      <div>
        {props.curPage > 3 && props.curPage === props.chunksLength - 2 && (
          <div className={classes.pagination}>
            <span
              onClick={() => {
                props.onSelectPage(1);
              }}
            >
              1
            </span>
            <span>...</span>
            <span
              onClick={() => {
                props.onSelectPage(props.curPage - 1);
              }}
            >
              {props.curPage - 1}
            </span>
            <span className={classes.curPageSpan}>{props.curPage}</span>
            <span
              onClick={() => {
                props.onSelectPage(props.curPage + 1);
              }}
            >
              {props.curPage + 1}
            </span>
            <span
              onClick={() => {
                props.onSelectPage(props.chunksLength);
              }}
            >
              {props.chunksLength}
            </span>
          </div>
        )}
      </div>

      <div>
        {props.curPage > 3 && props.curPage === props.chunksLength - 1 && (
          <div className={classes.pagination}>
            <span
              onClick={() => {
                props.onSelectPage(1);
              }}
            >
              1
            </span>
            <span>...</span>
            <span
              onClick={() => {
                props.onSelectPage(props.curPage - 1);
              }}
            >
              {props.curPage - 1}
            </span>
            <span className={classes.curPageSpan}>{props.curPage}</span>
            <span
              onClick={() => {
                props.onSelectPage(props.chunksLength);
              }}
            >
              {props.chunksLength}
            </span>
          </div>
        )}
      </div>

      <div>
        {props.curPage > 3 && props.curPage === props.chunksLength && (
          <div className={classes.pagination}>
            <span
              onClick={() => {
                props.onSelectPage(1);
              }}
            >
              1
            </span>
            <span>...</span>
            <span
              onClick={() => {
                props.onSelectPage(props.curPage - 1);
              }}
            >
              {props.curPage - 1}
            </span>
            <span className={classes.curPageSpan}>{props.curPage}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Pagination;
