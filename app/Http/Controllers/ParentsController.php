<?php

namespace App\Http\Controllers;

use App\Models\Parents;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ParentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $parents = Parents::paginate(10);

        return Inertia::render('Parents/index', ['parents' => $parents]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Parents/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate();
        Parents::create($data);
        return redirect()->route('parents.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $parents = Parents::find($id);
        return Inertia::render('Parents/show', [
            'parents' => $parents,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $parents = Parents::find($id);
        return Inertia::render('Parents/edit', [
            'parents' => $parents,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $parents = Parents::find($id);
        $data = $request->validate();
        $parents->update($data);
        return redirect()->route('parents.index')->with('success', 'parents updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Parents::destroy($id);
        return redirect()->route('parents.index')->with('success', 'parents deleted successfully');
    }
}
