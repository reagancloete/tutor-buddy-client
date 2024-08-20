/*
 * Student Tutor Booking Management System
 * This is a system allowing students and tutors to book in-person sessions at designated venues on campus.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 222641495@mycput.ac.za
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.61
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import LocationDTO from '../model/LocationDTO';

/**
* Location service.
* @module api/LocationApi
* @version 1.0.0
*/
export default class LocationApi {

    /**
    * Constructs a new LocationApi. 
    * @alias module:api/LocationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addLocation operation.
     * @callback moduleapi/LocationApi~addLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new venue
     * This can only be done by the admin.
     * @param {module:model/LocationDTO} body Location object that needs to be added to the system
     * @param {module:api/LocationApi~addLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addLocation(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addLocation");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LocationDTO;

      return this.apiClient.callApi(
        '/location', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteLocation operation.
     * @callback moduleapi/LocationApi~deleteLocationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete location
     * This can only be done by the admin.
     * @param {Number} locationId ID of Location that needs to be deleted
     * @param {module:api/LocationApi~deleteLocationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteLocation(locationId, callback) {
      
      let postBody = null;
      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling deleteLocation");
      }

      let pathParams = {
        'locationId': locationId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/location/{locationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllLocations operation.
     * @callback moduleapi/LocationApi~getAllLocationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LocationDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all location
     * Returns all locations in the system
     * @param {module:api/LocationApi~getAllLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllLocations(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [LocationDTO];

      return this.apiClient.callApi(
        '/location', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getLocation operation.
     * @callback moduleapi/LocationApi~getLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a venue by id
     * This retrieves a location by its id
     * @param {Number} locationId Id of location to retrieve
     * @param {module:api/LocationApi~getLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getLocation(locationId, callback) {
      
      let postBody = null;
      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling getLocation");
      }

      let pathParams = {
        'locationId': locationId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LocationDTO;

      return this.apiClient.callApi(
        '/location/{locationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateLocation operation.
     * @callback moduleapi/LocationApi~updateLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing location
     * This can only be done by the admin.
     * @param {module:model/LocationDTO} body Updated location object
     * @param {Number} locationId ID of location that needs to be updated
     * @param {module:api/LocationApi~updateLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateLocation(body, locationId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLocation");
      }
      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling updateLocation");
      }

      let pathParams = {
        'locationId': locationId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LocationDTO;

      return this.apiClient.callApi(
        '/location/{locationId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}