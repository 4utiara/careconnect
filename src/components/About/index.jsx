import React from "react";

import { Button, Input, Text } from "components";

const About = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
          <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start rounded-lg w-[49%] sm:w-full">
            <Text
              className="text-blue_gray-900 text-lg"
              size="txtGilroyMedium18Bluegray900"
            >
              First Name
            </Text>
            <Input
              name="Group10198"
              placeholder="Enter First Name"
              className="font-gilroy font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid w-full"
              type="text"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            ></Input>
          </div>
          <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start rounded-lg w-[49%] sm:w-full">
            <Text
              className="text-blue_gray-900 text-lg"
              size="txtGilroyMedium18Bluegray900"
            >
              Last Name
            </Text>
            <Input
              name="Group10198 One"
              placeholder="Enter Last Name"
              className="font-gilroy font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid w-full"
              type="text"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            ></Input>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
          <Text
            className="text-blue_gray-900 text-lg"
            size="txtGilroyMedium18Bluegray900"
          >
            Email
          </Text>
          <Input
            name="Group10198 Two"
            placeholder="Enter Your Email"
            className="font-gilroy font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid w-full"
            type="email"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          ></Input>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start mt-[19px] rounded-lg w-full">
          <Text
            className="text-blue_gray-900 text-lg"
            size="txtGilroyMedium18Bluegray900"
          >
            Mobile Number
          </Text>
          <Input
            name="Group10198 Three"
            placeholder="Enter Your Number"
            className="font-gilroy font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid w-full"
            type="number"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          ></Input>
        </div>
        <div className="block flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
          <Text
            className="text-blue_gray-900 text-lg"
            size="txtGilroyMedium18Bluegray900"
          >
            Address
          </Text>
          <Input
            name="Group10199"
            placeholder="Enter Your Address"
            className="font-gilroy font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid w-full"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          ></Input>
        </div>
        <Button
          className="cursor-pointer font-gilroy font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center"
          shape="round"
          color="blue_A700"
          size="md"
          variant="fill"
        >
          Save
        </Button>
      </div>
    </>
  );
};

About.defaultProps = {};

export default About;
