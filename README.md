IMPORTANT!

How the application works:

    1.  Since i don't have a server to use, in the data.js file there is a big object representing all the data in the project.
        The data is then imported to the three components (Bags, shoes , watches) with the useEffect hook and stored in a state, basically mimicking
        a fetch request from a server.

    2.  There are three main components - shoes , bags , and watches. All the items are displayed in a grid, with a filter to the left of the grid(toggleable).
        If you click on the image of one of the cards displayed on the grid , you will be redirected to a details page with all the information of the product,
        as well as a button to buy it(just shows an alert when you click it).

    3. Sorting. You can sort any of the three components alphabetically (by brand name basically) either ascending or descending. You can also sort by price.
    

    4. Filters. Unfortunately i couldn't figure out how to have two filters active at the same time (by selecting multiple ways to filter), so the              
        way the filter works is you can filter only by one element at a time (various prices), as well as filter if the item is on sale or not.
        You can also filter by certain brands and others (check description of filter component). You cant filter by two criterias at once , but you can combine filter and sort.

    5.  More content button. It just works like a normal button. Max items that can be shown by default are 6 , and if there are more than 6 available the more content button will appear, and naturally if there are no more to show itl disappear. (Check the watches section as it has 14 total items)

    6. I have described how the project works in the code itself with notes to easier understand.

    7. Since in the task description it said room for logo icon , i have added a small home icon at the top (in place of the actual logo icon).

    8. I have only used react for this application as well as an icons library and react router.

    9. Since i don't know react native yet and learning it will take longer than the time i have available for this project the application doesn't appear properly on mobile.

    10. The most challenging parts for me were basically the drop down menu for sorting(I had alot of trouble figuring out how the dropdown works , the functionality was easy), as well as the filtering with multiple criterias at the same time.