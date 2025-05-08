// SPDX-License-Identifier: MIT

//// Specifies the Solidity compiler version required to compile the code.
pragma solidity >=0.8.2 <0.9.0;

contract MyStorage {
    // declare an integer variable named data
    uint data;

    // SET CHANGE OR UPDATE
    function set(uint x) public {
        data = x;
    }

    //GET RETRIEVING
    function get() public view returns (uint) {
        return data;
    }
}