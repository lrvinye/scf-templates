
import _ from "lodash";


export const test_handler = async (event, context) => {
  console.log(`环境变量`, process.env);
  console.log(`触发事件`, event);
  return event;
};
